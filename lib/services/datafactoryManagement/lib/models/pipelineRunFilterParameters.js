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
 * Query parameters for listing pipeline runs.
 *
 */
class PipelineRunFilterParameters {
  /**
   * Create a PipelineRunFilterParameters.
   * @member {string} [continuationToken] The continuation token for getting
   * the next page of results. Null for first page.
   * @member {date} lastUpdatedAfter The time at or after which the pipeline
   * run event was updated in 'ISO 8601' format.
   * @member {date} lastUpdatedBefore The time at or before which the pipeline
   * run event was updated in 'ISO 8601' format.
   * @member {array} [filters] List of filters.
   * @member {array} [orderBy] List of OrderBy option.
   */
  constructor() {
  }

  /**
   * Defines the metadata of PipelineRunFilterParameters
   *
   * @returns {object} metadata of PipelineRunFilterParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PipelineRunFilterParameters',
      type: {
        name: 'Composite',
        className: 'PipelineRunFilterParameters',
        modelProperties: {
          continuationToken: {
            required: false,
            serializedName: 'continuationToken',
            type: {
              name: 'String'
            }
          },
          lastUpdatedAfter: {
            required: true,
            serializedName: 'lastUpdatedAfter',
            type: {
              name: 'DateTime'
            }
          },
          lastUpdatedBefore: {
            required: true,
            serializedName: 'lastUpdatedBefore',
            type: {
              name: 'DateTime'
            }
          },
          filters: {
            required: false,
            serializedName: 'filters',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PipelineRunQueryFilterElementType',
                  type: {
                    name: 'Composite',
                    className: 'PipelineRunQueryFilter'
                  }
              }
            }
          },
          orderBy: {
            required: false,
            serializedName: 'orderBy',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PipelineRunQueryOrderByElementType',
                  type: {
                    name: 'Composite',
                    className: 'PipelineRunQueryOrderBy'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = PipelineRunFilterParameters;
