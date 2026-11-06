use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn rs_calculate_pi(iterations: i32) -> f64 {
    let mut rng = fastrand::Rng::with_seed(42);
    let mut circle_points: i32 = 0;

    for _ in 0..iterations {
        // Generate random floats between 0.0 and 1.0
        let rand_x = rng.f64();
        let rand_y = rng.f64();

        // Calculate distance from origin (x^2 + y^2). 
        // If it's <= 1.0, the point fell inside the circle.
        let origin_dist = rand_x * rand_x + rand_y * rand_y;
        
        if origin_dist <= 1.0 {
            circle_points += 1;
        }
    }

    // Pi is 4 * (points in circle / total points)
    let pi = 4.0 * (circle_points as f64) / (iterations as f64);
    
    return pi
}