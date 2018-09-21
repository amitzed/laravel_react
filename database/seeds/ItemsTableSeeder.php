<?php

use Illuminate\Database\Seeder;

class ItemsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 85; $i++) {
          Item::create([
            'name' => $faker->title,
            'about' => $faker->paragraph,
            'price' => $faker->randomNumber(4),
            'stock' => $faker->boolean(85)
          ]);
        }
    }
}
