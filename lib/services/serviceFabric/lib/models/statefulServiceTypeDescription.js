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

const models = require('./index');

/**
 * Describes a stateful service type defined in the service manifest of a
 * provisioned application type.
 *
 * @extends models['ServiceTypeDescription']
 */
class StatefulServiceTypeDescription extends models['ServiceTypeDescription'] {
  /**
   * Create a StatefulServiceTypeDescription.
   * @member {boolean} [hasPersistedState] A flag indicating whether this is a
   * persistent service which stores states on the local disk. If it is then
   * the value of this property is true, if not it is false.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of StatefulServiceTypeDescription
   *
   * @returns {object} metadata of StatefulServiceTypeDescription
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Stateful',
      type: {
        name: 'Composite',
        className: 'StatefulServiceTypeDescription',
        modelProperties: {
          isStateful: {
            required: false,
            serializedName: 'IsStateful',
            type: {
              name: 'Boolean'
            }
          },
          serviceTypeName: {
            required: false,
            serializedName: 'ServiceTypeName',
            type: {
              name: 'String'
            }
          },
          placementConstraints: {
            required: false,
            serializedName: 'PlacementConstraints',
            type: {
              name: 'String'
            }
          },
          servicePlacementPolicies: {
            required: false,
            serializedName: 'ServicePlacementPolicies',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ServicePlacementPolicyDescriptionElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: 'Type',
                      clientName: 'type'
                    },
                    uberParent: 'ServicePlacementPolicyDescription',
                    className: 'ServicePlacementPolicyDescription'
                  }
              }
            }
          },
          extensions: {
            required: false,
            serializedName: 'Extensions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ServiceTypeExtensionDescriptionElementType',
                  type: {
                    name: 'Composite',
                    className: 'ServiceTypeExtensionDescription'
                  }
              }
            }
          },
          kind: {
            required: true,
            serializedName: 'Kind',
            type: {
              name: 'String'
            }
          },
          hasPersistedState: {
            required: false,
            serializedName: 'HasPersistedState',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = StatefulServiceTypeDescription;
