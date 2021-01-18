export function populationWithDot(population) {
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}