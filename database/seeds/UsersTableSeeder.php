<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = factory(App\Models\User::class)->create([
            'name' => 'Антон Смолко',
            'email' => 'asmolko@yandex.ru',
            'confirmed' => 1,
            'password' => bcrypt('nnnnnn')
        ]);

        $user->syncRoles([3]);
    }
}
