/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Response to put/get linked server (with properties) for Redis cache.
 *
 */
class RedisLinkedServerWithProperties {
  /**
   * Create a RedisLinkedServerWithProperties.
   * @member {string} [id] Resource ID.
   * @member {string} [name] Resource name.
   * @member {string} [type] Resource type.
   * @member {string} linkedRedisCacheId Fully qualified resourceId of the
   * linked redis cache.
   * @member {string} linkedRedisCacheLocation Location of the linked redis
   * cache.
   * @member {string} serverRole Role of the linked server. Possible values
   * include: 'Primary', 'Secondary'
   * @member {string} [provisioningState] Terminal state of the link between
   * primary and secondary redis cache.
   */
  constructor() {
  }

  /**
   * Defines the metadata of RedisLinkedServerWithProperties
   *
   * @returns {object} metadata of RedisLinkedServerWithProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RedisLinkedServerWithProperties',
      type: {
        name: 'Composite',
        className: 'RedisLinkedServerWithProperties',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          linkedRedisCacheId: {
            required: true,
            serializedName: 'properties.linkedRedisCacheId',
            type: {
              name: 'String'
            }
          },
          linkedRedisCacheLocation: {
            required: true,
            serializedName: 'properties.linkedRedisCacheLocation',
            type: {
              name: 'String'
            }
          },
          serverRole: {
            required: true,
            serializedName: 'properties.serverRole',
            type: {
              name: 'Enum',
              allowedValues: [ 'Primary', 'Secondary' ]
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RedisLinkedServerWithProperties;