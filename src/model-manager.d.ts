import type { Model, ModelStatic } from './model';
import type { Sequelize } from './sequelize';

export class ModelManager {
  sequelize: Sequelize;
  models: ModelStatic[];
  all: ModelStatic[];

  constructor(sequelize: Sequelize);
  addModel<T extends ModelStatic>(model: T): T;
  removeModel(model: ModelStatic): void;
  getModel(against: unknown, options?: { attribute?: string }): typeof Model;

  /**
   * Returns an array that lists every model, sorted in order
   * of foreign key references: The first model is a model that is depended upon,
   * the last model is a model that is not depended upon.
   *
   * If there is a cyclic dependency, this returns null.
   */
  getModelsTopoSortedByForeignKey(): ModelStatic[] | null;
}
