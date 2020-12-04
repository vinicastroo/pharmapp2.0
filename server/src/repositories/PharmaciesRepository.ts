import Pharmacy from '../models/Pharmacy';

class PharmaciesRepository {
  private pharmacies: Pharmacy[];

  constructor() {
    this.pharmacies = [];
  }

  public findIndexById(id: string): number {
    const findPharmacyIndex = this.pharmacies.findIndex(
      pharmacy => id === pharmacy.id,
    );

    return findPharmacyIndex;
  }

  public find(id: string): Pharmacy | boolean {
    const findPharmacyIndex = this.pharmacies.findIndex(
      pharmacy => id === pharmacy.id,
    );

    if (findPharmacyIndex !== -1) {
      return this.pharmacies[findPharmacyIndex];
    }

    return false;
  }

  public create(name: string, cnpj: string, date: Date): Pharmacy {
    const pharmacy = new Pharmacy(name, cnpj, date);

    this.pharmacies.push(pharmacy);

    return pharmacy;
  }

  public all(): Pharmacy[] {
    return this.pharmacies;
  }

  public update(
    id: string,
    name: string,
    cnpj: string,
    date: Date,
    indexId: number,
  ): Pharmacy {
    this.pharmacies[indexId] = {
      id,
      name,
      cnpj,
      date,
    };

    return this.pharmacies[indexId];
  }

  public delete(indexId: number): Pharmacy[] {
    this.pharmacies.splice(indexId, 1);
    return this.pharmacies;
  }
}

export default PharmaciesRepository;
