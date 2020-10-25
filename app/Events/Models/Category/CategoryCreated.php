<?php

namespace App\Events\Models\Category;


use App\Events\Models\Model;
use App\Models\Category;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class CategoryCreated extends Model
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * CategorySaved constructor.
     * @param Category $model
     */
    public function __construct(Category $model)
    {
        parent::__construct($model);
    }
}
