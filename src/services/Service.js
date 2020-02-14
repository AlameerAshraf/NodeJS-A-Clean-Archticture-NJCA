import mongoose from 'mongoose';
import loggers from '../loaders/logger';
class Service {
    constructor(model) {
        this.model = model;
        this.create = this.create.bind(this);
        this.read = this.read.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    /**
     * Add new item.
     * @param {Data to be inserted in DB} data 
     */
    async create(data) {
        try {
            let item = await this.model.create(data);
            if (item)
                return {
                    error: false,
                    data: item
                };
        } catch (exception) {
            return {
                error: true,
                statusCode: 500,
                message: exception || "Not able to create new item."
            }
        }
    }



    /**
     * Loads all the data.
     * @param {Query passed by the application layer, which is the user query!} query 
     */
    async read(query) {
        let {
            skip,
            limit
        } = query;

        skip = skip ? Number(skip) : 0;
        limit = limit ? Number(limit) : 10;

        delete query.skip;
        delete query.limit;

        try {
            let items = await this.model
                .findOne(query)
                .skip(skip)
                .limit(limit);

            return {
                error: false,
                statusCode: 200,
                data: items
                
            }
        } catch (exception) {
            return {
                error: exception,
                statusCode: 500,
                exception
            }
        }
    }

        /**
     * Loads all the data.
     * @param {Query passed by the application layer, which is the user query!} query 
     */
    async readAll(query , projection = {}) {
        let {
            skip,
            limit
        } = query;

        skip = skip ? Number(skip) : 0;
        limit = limit ? Number(limit) : 10;

        delete query.skip;
        delete query.limit;

        try {
            let items = await this.model
                .find(query , projection)
                .skip(skip)
                .limit(limit);
            let total = items.length;

            return {
                error: false,
                statusCode: 200,
                data: items,
                total
            }
        } catch (exception) {
            return {
                error: exception,
                statusCode: 500,
                exception,
                total: 0
            }
        }
    }


    /**
     * Update existing data 
     * @param {Old data ID} id 
     * @param {New data to be instered } data 
     */
    async update(id, data) {
        try {
            let item = await this.model.findByIdAndUpdate(id, data, {
                new: true
            });
            return {
                error: false,
                statusCode: 202,
                item
            };
        } catch (error) {
            return {
                error: true,
                statusCode: 500,
                error
            };
        }
    }
    
    
    /**
     * Delete item.
     * @param {ID of element to be deleted} id 
     */
    async delete(id) {
        try {
            let item = await this.model.findByIdAndDelete(id);
            if (!item)
                return {
                    error: true,
                    statusCode: 404,
                    message: "item not found"
                };

            return {
                error: false,
                deleted: true,
                statusCode: 202,
                item
            };
        } catch (error) {
            return {
                error: true,
                statusCode: 500,
                error
            };
        }
    }


    /**
     * Update existing data by Query
     */
    async updateByQuery(query, data) {
        try {
            let item = await this.model.updateOne(query, data, {
                new: true
            });
            return {
                error: false,
                statusCode: 202,
                item
            };
        } catch (error) {
            return {
                error: true,
                statusCode: 500,
                message: error
            };
        }
    };
}

export default Service;