<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stuff extends Model
{
    use HasFactory;
    protected $fillable = ["name","date_of_birth","address","phone_number","user_id","department_id","gender"];

}
