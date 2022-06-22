import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    DeleteDateColumn,
    CreateDateColumn,
    UpdateDateColumn,

} from 'typeorm';
import * as TypeBox from '@sinclair/typebox';

import { Nullable } from '../utils';

/**
 * Schema for tarifas entity
 */
export const tarifasSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        taR_COD_IDENTIF_TARIFA: TypeBox.Type.Number({ default: 0 }),

        vtF_DATA_FIM_VALIDADE: TypeBox.Type.String({ format: 'date-time' }),

        vtF_VALOR_TARIFA: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating tarifas
 */
export const tarifasInputSchema = TypeBox.Type.Object({

        taR_COD_IDENTIF_TARIFA: TypeBox.Type.Number({ default: 0 }),

        vtF_DATA_FIM_VALIDADE: TypeBox.Type.String({ format: 'date-time' }),

        vtF_VALOR_TARIFA: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

export type TarifasInput = TypeBox.Static<typeof tarifasInputSchema>;

@Entity()
export class Tarifas implements Omit<TypeBox.Static<typeof tarifasSchema>, 'vtF_DATA_FIM_VALIDADE'> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ type: 'integer', default: 0 })
        taR_COD_IDENTIF_TARIFA!: number;

        @Column({ type: 'timestamptz', nullable: true })
        vtF_DATA_FIM_VALIDADE?: Date;

        @Column({ type: 'decimal', default: 0 })
        vtF_VALOR_TARIFA!: number;

}
