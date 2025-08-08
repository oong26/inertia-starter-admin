<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    
    Route::get('/calendar', function () {
        return Inertia::render('Calendar');
    })->name('calendar');

    Route::get('/user-profile', function () {
        return Inertia::render('UserProfile');
    })->name('user-profile');

    Route::prefix('form')->name('form.')
        ->group(function () {
            Route::get('elements', function () {
                return Inertia::render('FormElements');
            })->name('elements');
            Route::get('layout', function () {
                return Inertia::render('FormLayout');
            })->name('layout');
        });

    Route::prefix('page')->name('page.')
        ->group(function () {
            Route::get('blank', function () {
                return Inertia::render('BlankPage');
            })->name('blank');
            Route::get('not-found', function () {
                return Inertia::render('Errors/FourZeroFour');
            })->name('not-found');
            Route::get('error', function () {
                return Inertia::render('Errors/FiveZeroZero');
            })->name('error');
            Route::get('error', function () {
                return Inertia::render('Errors/FiveZeroZero');
            })->name('error');
            Route::get('service-unavailable', function () {
                return Inertia::render('Errors/FiveZeroThree');
            })->name('service-unavailable');
            Route::get('coming-soon', function () {
                return Inertia::render('Errors/ComingSoon');
            })->name('coming-soon');
            Route::get('maintenance', function () {
                return Inertia::render('Errors/Maintenance');
            })->name('maintenance');
            Route::get('success', function () {
                return Inertia::render('Errors/Success');
            })->name('success');
        });
    
    Route::prefix('profile')->name('profile.')
        ->group(function () {
            Route::get('/profile', [ProfileController::class, 'edit'])->name('edit');
            Route::patch('/profile', [ProfileController::class, 'update'])->name('update');
            Route::delete('/profile', [ProfileController::class, 'destroy'])->name('destroy');
        });
});

require __DIR__.'/auth.php';
