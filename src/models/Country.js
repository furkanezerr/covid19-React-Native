export default class Country {
    constructor(id, name, continent, population, day, active, critical, newCase, recovered, totalCase, newDeath, totalDeath) {
        this.id = id;
        this.name = name;
        this.continent = continent;
        this.population = population;
        this.day = day;
        this.active = active;
        this.critical = critical;
        this.newCase = newCase;
        this.recovered = recovered;
        this.totalCase = totalCase;
        this.newDeath = newDeath;
        this.totalDeath = totalDeath;
    }
}