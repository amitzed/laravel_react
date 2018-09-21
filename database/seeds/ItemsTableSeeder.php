<?php

use Illuminate\Database\Seeder;
use App\Item;

class ItemsTableSeeder extends Seeder
{
    public function run()
    {
        $faker = \Faker\Factory::create();
      
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
