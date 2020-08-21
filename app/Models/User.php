<?php

namespace App\Models;

use App\Events\Models\User\UserDeleted;
use App\Events\Models\User\UserSaved;
use App\Events\Models\User\UserUpdated;
use App\Notifications\MailEmailConfirmation;
use App\Notifications\MailNewEmailConfirmation;
use App\Notifications\MailResetPassword;
use App\Notifications\MailWelcome;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Auth;
use Laratrust\Traits\LaratrustUserTrait;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject, MustVerifyEmail
{
    use LaratrustUserTrait;
    use Notifiable;

    public const DEFAULT_ROLE  = 1;
    public const SUPER_ADMIN_ROLE = 3;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'confirmed', 'publish'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $dispatchesEvents = [
        'saved' => UserSaved::class,
        'updated' => UserUpdated::class,
        'deleted' => UserDeleted::class,
    ];

    protected $with = ['roles:id,name,display_name'];

//    /**
//     * The attributes that should be cast to native types.
//     *
//     * @var array
//     */
//    protected $casts = [
//        'email_verified_at' => 'datetime',
//    ];

    public function details()
    {
        return $this->hasOne(UserDetail::class);
    }



    /**
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function socials()
    {
        return $this->hasMany(UserSocial::class, 'user_id', 'id');
    }

    /**
     * @param $service
     * @return bool
     */
    public function hasSocialLinked($service)
    {
        return (bool) $this->socials->where('service', $service)->count();
    }

    /**
     * Override the mail body for reset password notification mail.
     */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new MailResetPassword($token));
    }

    public function sendEmailConfirmationNotification()
    {
        $this->notify(new MailEmailConfirmation());
    }

    public function sendWelcomeNotification()
    {
        $this->notify(new MailWelcome());
    }

    public function sendNewEmailConfirmationNotification()
    {
        $this->notify(new MailNewEmailConfirmation());
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function emailConfirmation()
    {
        return $this->hasOne(EmailConfirmation::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function cart() {
        return $this->hasOne('App\Models\Cart');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasManyThrough
     */
    public function cartItems() {
        return $this->hasManyThrough('App\Models\CartItem', 'App\Models\Cart');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function orders() {
        return $this->hasMany('App\Models\Order');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function likes()
    {
        return $this->belongsToMany('App\Models\Image', 'likes');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function cards()
    {
        return $this->hasMany('App\Models\Card');
    }

    /**
     * @return bool
     */
    public function isActive(): bool
    {
        return (bool) $this->publish;
    }

    /**
     * @return bool
     */
    public function isSuperAdmin(): bool
    {
        return $this->hasRole(config('settings.super_admin_role_name'));
    }

    /**
     * @return bool
     */
    public function isOwner(): bool
    {
        return $this->hasRole(config('settings.owner_role_name'));
    }

    /**
     * @return bool
     */
    public function isEditable(): bool
    {
        return $this->isOwnAccount() ||
            !$this->isAn(config('settings.super_admin_role_name')) &&
            !(Auth::user()->isAn(config('settings.admin_role_name')) && !$this->isAn('user'));
    }

    public function isRoleChangeable(): bool
    {
        return !$this->isAn('super_admin') &&
            Auth::user()->hasRole([
                config('settings.super_admin_role_name'),
                config('settings.owner_role_name')
            ]) &&
            !$this->isOwnAccount();
    }

    public function canSetRole(): bool
    {
        return $this->hasRole([
            config('settings.super_admin_role_name'),
            config('settings.owner_role_name'),
        ]);
    }

    public function removable(): bool
    {
        return !$this->isOwnAccount() &&
            !$this->hasRole(config('settings.super_admin_role_name')) &&
            !Auth::user()->hasRole(config('settings.admin_role_name'));
    }

    /**
     * @return bool
     */
    public function isOwnAccount(): bool
    {
        return $this->id === Auth::user()->id;
    }

    /**
     * @return bool
     */
    public function isConfirmed(): bool
    {
        return (bool) $this->confirmed;
    }

    /**
     * @param $query
     * @param string $token
     * @return mixed
     */
    public function scopeGetEmailConfirmation($query, string $token)
    {
        return $query->whereHas('emailConfirmation', function (Builder $query) use ($token) {
            $query->where('token', 'like', $token);
        });
    }

    /**
     * @param $query
     * @param string $id
     * @return mixed
     */
    public function scopeGetUserBySocialId($query, string $id)
    {
        return $query->whereHas('socials', function (Builder $query) use ($id) {
            $query->where('social_id', 'like', $id);
        })->get();
    }
}
