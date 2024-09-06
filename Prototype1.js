let building = {
    address: `Korolev Elizaveti II st., 2, Dnipro, Dnipropetrovsk region`,
    buildingColor: `Light Blue`,
    floorsCount: 4,
    length: 100,
    width: 70,
    buildingArea: 28000,
    getDescription: function (){
        return this.address + ' is address of this building. Color - ' + this.buildingColor + '. Number of floors - ' + this.floorsCount + `. Length - ` + this.length + `m². Width - ` + this.width + `m². The area of the building - ` + this.buildingArea + `m².`;
    }

}

alert(building.getDescription());
//alert(`Address of this building is ` + building.getDescription());
