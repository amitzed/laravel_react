<?php

use Illuminate\Database\Seeder;
use App\Item;

class ItemsTableSeeder extends Seeder
{
    public function run()
    {
        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 10; $i++) {
          Item::create([
            'name' => $faker->sentence($nbWords = 4, $variableNbWords = true),
            'about' => $faker->paragraph,
            'price' => $faker->randomNumber(4),
            'stock' => $faker->boolean(85)
          ]);
        }
    }
}
