import { EntityRepository, Repository } from 'typeorm';

import { Tarifas } from '../entity/Tarifas';
import { applyFilters, EntityQuery } from './tarifasUtils';

@EntityRepository(Tarifas)
export class TarifasRepository extends Repository<Tarifas> {

    filter(query: any | undefined, page: number, size: number, field: string | undefined, sort: "ASC" | "DESC" | undefined = "ASC" ): Promise<[Tarifas[], number]> {
        const qb = this.createQueryBuilder('e');
        applyFilters(qb, query);
        if(field) {
            return qb
                .skip(page * size)
                .take(size)
                .orderBy(`e.${field}`, sort)

                .getManyAndCount();
        } else {
            return qb
                .skip(page * size)
                .take(size)

                .getManyAndCount();
        }
    }
}
