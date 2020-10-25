       

### <a id="documentation-body"></a>

![Hackolade image](/db-diagram/image1.png?raw=true)

MongoDB Physical Model
----------------------

#### Schema for:

Model name: New Model

Author:

Version:

File name:

File path:

Printed On: Sun Oct 25 2020 18:16:38 GMT-0400 (Eastern Daylight Time)

Created with: [Hackolade](https://hackolade.com/) - Visual data modeling for NoSQL and multimodel databases

### <a id="contents"></a>

*   [1. Model](#model)
*   [2. Databases](#containers)
    *   [2.1 task-manager-api](#aa9cdd00-170e-11eb-bad3-758dcca20829)
        
        [2.1.2. Collections](#aa9cdd00-170e-11eb-bad3-758dcca20829)
        
        [2.1.2.1 tasks](#aa6f3d50-170e-11eb-bad3-758dcca20829)
        
        [2.1.2.2 users](#aa7027b0-170e-11eb-bad3-758dcca20829)
        

### <a id="model"></a>

##### 1\. Model

##### 1.1 Model **New Model**

##### 1.1.1 **New Model** Entity Relationship Diagram

![Hackolade image](/db-diagram/image2.png?raw=true)

##### 1.1.2 **New Model** Properties

##### 1.1.2.1 **Details** tab

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td><span>Model name</span></td><td>New Model</td></tr><tr><td><span>Technical name</span></td><td></td></tr><tr><td><span>Description</span></td><td><div class="docs-markdown"></div></td></tr><tr><td><span>Author</span></td><td></td></tr><tr><td><span>Version</span></td><td></td></tr><tr><td><span>DB vendor</span></td><td>MongoDB</td></tr><tr><td><span>DB version</span></td><td>v4.4</td></tr><tr><td><span>Comments</span></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 1.1.3 **New Model** DB Definitions

### <a id="containers"></a>

##### 2\. Databases

### <a id="aa9cdd00-170e-11eb-bad3-758dcca20829"></a>2.1 Database **task-manager-api**

![Hackolade image](/db-diagram/image3.png?raw=true)

##### 2.1.1 **task-manager-api** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Database name</td><td>task-manager-api</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Enable sharding</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2 **task-manager-api** Collections

### <a id="aa6f3d50-170e-11eb-bad3-758dcca20829"></a>2.1.2.1 Collection **tasks**

##### 2.1.2.1.1 **tasks** Tree Diagram

![Hackolade image](/db-diagram/image4.png?raw=true)

##### 2.1.2.1.2 **tasks** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>tasks</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#aa9cdd00-170e-11eb-bad3-758dcca20829>task-manager-api</a></td></tr><tr><td>Capped</td><td>false</td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Additional properties</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.1.3 **tasks** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#aa6e2be0-170e-11eb-bad3-758dcca20829>_id</a></td><td class="no-break-word">objectId</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#aa6e2be2-170e-11eb-bad3-758dcca20829>completed</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#aa6e2be4-170e-11eb-bad3-758dcca20829>description</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#aa6e52f0-170e-11eb-bad3-758dcca20829>owner</a></td><td class="no-break-word">objectId</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#aa6e2be3-170e-11eb-bad3-758dcca20829>createdAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#aa6e52f1-170e-11eb-bad3-758dcca20829>updatedAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#aa6e2be1-170e-11eb-bad3-758dcca20829>__v</a></td><td class="no-break-word">integer32</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="aa6e2be0-170e-11eb-bad3-758dcca20829"></a>2.1.2.1.3.1 Field **\_id**

##### 2.1.2.1.3.1.1 **\_id** Tree Diagram

![Hackolade image](/db-diagram/image5.png?raw=true)

##### 2.1.2.1.3.1.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="aa6e2be2-170e-11eb-bad3-758dcca20829"></a>2.1.2.1.3.2 Field **completed**

##### 2.1.2.1.3.2.1 **completed** Tree Diagram

![Hackolade image](/db-diagram/image6.png?raw=true)

##### 2.1.2.1.3.2.2 **completed** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>completed</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="aa6e2be4-170e-11eb-bad3-758dcca20829"></a>2.1.2.1.3.3 Field **description**

##### 2.1.2.1.3.3.1 **description** Tree Diagram

![Hackolade image](/db-diagram/image7.png?raw=true)

##### 2.1.2.1.3.3.2 **description** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>description</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Format</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Sample</td><td>fourth</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="aa6e52f0-170e-11eb-bad3-758dcca20829"></a>2.1.2.1.3.4 Field **owner**

##### 2.1.2.1.3.4.1 **owner** Tree Diagram

![Hackolade image](/db-diagram/image8.png?raw=true)

##### 2.1.2.1.3.4.2 **owner** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>owner</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="aa6e2be3-170e-11eb-bad3-758dcca20829"></a>2.1.2.1.3.5 Field **createdAt**

##### 2.1.2.1.3.5.1 **createdAt** Tree Diagram

![Hackolade image](/db-diagram/image9.png?raw=true)

##### 2.1.2.1.3.5.2 **createdAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>createdAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>ISODate("2020-10-25T22:08:24.335Z")</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="aa6e52f1-170e-11eb-bad3-758dcca20829"></a>2.1.2.1.3.6 Field **updatedAt**

##### 2.1.2.1.3.6.1 **updatedAt** Tree Diagram

![Hackolade image](/db-diagram/image10.png?raw=true)

##### 2.1.2.1.3.6.2 **updatedAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>updatedAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>ISODate("2020-10-25T22:08:24.335Z")</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="aa6e2be1-170e-11eb-bad3-758dcca20829"></a>2.1.2.1.3.7 Field **\_\_v**

##### 2.1.2.1.3.7.1 **\_\_v** Tree Diagram

![Hackolade image](/db-diagram/image11.png?raw=true)

##### 2.1.2.1.3.7.2 **\_\_v** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>__v</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td>integer32</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td>false</td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td>false</td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Sample</td><td>0</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.1.4 **tasks** Indexes

<table class="index-table"><thead><tr><td class="table-property-column">Property</td><td class="table-column-property">_id_</td></tr></thead><tbody><tr><td>Name</td><td class="table-column-indexes">_id_</td></tr><tr><td>Key</td><td class="table-column-indexes">_id('ascending')</td></tr><tr><td>Hashed</td><td class="table-column-indexes"></td></tr><tr><td>Unique</td><td class="table-column-indexes"></td></tr><tr><td>Drop duplicates</td><td class="table-column-indexes"></td></tr><tr><td>Sparse</td><td class="table-column-indexes"></td></tr><tr><td>Background indexing</td><td class="table-column-indexes"></td></tr><tr><td>Partial filter exp</td><td class="table-column-indexes"></td></tr><tr><td>Expire after (seconds)</td><td class="table-column-indexes"></td></tr><tr><td>Storage engine</td><td class="table-column-indexes"></td></tr><tr><td>Comments</td><td class="table-column-indexes"></td></tr></tbody></table>

##### 2.1.2.1.5 **tasks** JSON Schema

```
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "tasks",
    "additionalProperties": false,
    "properties": {
        "_id": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "completed": {
            "type": "boolean"
        },
        "description": {
            "type": "string"
        },
        "owner": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "createdAt": {
            "type": "string",
            "format": "date-time"
        },
        "updatedAt": {
            "type": "string",
            "format": "date-time"
        },
        "__v": {
            "type": "integer"
        }
    },
    "required": [
        "_id",
        "completed",
        "description",
        "owner",
        "createdAt",
        "updatedAt",
        "__v"
    ]
}
```

##### 2.1.2.1.6 **tasks** JSON data

```
{
    "_id": ObjectId("507f1f77bcf86cd799439011"),
    "completed": false,
    "description": "fourth",
    "owner": ObjectId("507f1f77bcf86cd799439011"),
    "createdAt": ISODate("2020-10-25T22:08:24.335Z"),
    "updatedAt": ISODate("2020-10-25T22:08:24.335Z"),
    "__v": 0
}
```

##### 2.1.2.1.7 **tasks** Target Script

```
use task-manager-api;

db.createCollection( "tasks",{
    "storageEngine": {
        "wiredTiger": {}
    },
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "tasks",
            "additionalProperties": false,
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "completed": {
                    "bsonType": "bool"
                },
                "description": {
                    "bsonType": "string"
                },
                "owner": {
                    "bsonType": "objectId"
                },
                "createdAt": {
                    "bsonType": "date"
                },
                "updatedAt": {
                    "bsonType": "date"
                },
                "__v": {
                    "bsonType": "int"
                }
            },
            "required": [
                "_id",
                "completed",
                "description",
                "owner",
                "createdAt",
                "updatedAt",
                "__v"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});
db.tasks.createIndex(
{
    "_id": 1
},
{
    "name": "_id_"
}
);

```

### <a id="aa7027b0-170e-11eb-bad3-758dcca20829"></a>2.1.2.2 Collection **users**

##### 2.1.2.2.1 **users** Tree Diagram

![Hackolade image](/db-diagram/image12.png?raw=true)

##### 2.1.2.2.2 **users** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>users</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#aa9cdd00-170e-11eb-bad3-758dcca20829>task-manager-api</a></td></tr><tr><td>Capped</td><td>false</td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Additional properties</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.2.3 **users** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#aa6e52f2-170e-11eb-bad3-758dcca20829>_id</a></td><td class="no-break-word">objectId</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#aa6e52f8-170e-11eb-bad3-758dcca20829>tokens</a></td><td class="no-break-word">array</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#aa7027b1-170e-11eb-bad3-758dcca20829>[0]</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#aa6e52f9-170e-11eb-bad3-758dcca20829>_id</a></td><td class="no-break-word">objectId</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#aa6e52fa-170e-11eb-bad3-758dcca20829>token</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#aa6e52f6-170e-11eb-bad3-758dcca20829>name</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#aa6e52f5-170e-11eb-bad3-758dcca20829>email</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#aa6e52f7-170e-11eb-bad3-758dcca20829>password</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#aa6e52f4-170e-11eb-bad3-758dcca20829>createdAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#aa6e52fb-170e-11eb-bad3-758dcca20829>updatedAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#aa6e52f3-170e-11eb-bad3-758dcca20829>__v</a></td><td class="no-break-word">integer32</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="aa6e52f2-170e-11eb-bad3-758dcca20829"></a>2.1.2.2.3.1 Field **\_id**

##### 2.1.2.2.3.1.1 **\_id** Tree Diagram

![Hackolade image](/db-diagram/image13.png?raw=true)

##### 2.1.2.2.3.1.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="aa6e52f6-170e-11eb-bad3-758dcca20829"></a>2.1.2.2.3.2 Field **name**

##### 2.1.2.2.3.2.1 **name** Tree Diagram

![Hackolade image](/db-diagram/image14.png?raw=true)

##### 2.1.2.2.3.2.2 **name** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>name</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Format</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Sample</td><td>Nick DeMarco</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="aa6e52f5-170e-11eb-bad3-758dcca20829"></a>2.1.2.2.3.3 Field **email**

##### 2.1.2.2.3.3.1 **email** Tree Diagram

![Hackolade image](/db-diagram/image15.png?raw=true)

##### 2.1.2.2.3.3.2 **email** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>email</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Format</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Sample</td><td>nick@example.com</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="aa6e52f7-170e-11eb-bad3-758dcca20829"></a>2.1.2.2.3.4 Field **password**

##### 2.1.2.2.3.4.1 **password** Tree Diagram

![Hackolade image](/db-diagram/image16.png?raw=true)

##### 2.1.2.2.3.4.2 **password** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>password</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Format</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Sample</td><td>$2a$08$c3YotjXARHDv58/ThF4vWeeleDN2mjZzh59FHJ7r0Pfc3UTzOPNIq</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="aa6e52f8-170e-11eb-bad3-758dcca20829"></a>2.1.2.2.3.5 Field **tokens**

##### 2.1.2.2.3.5.1 **tokens** Tree Diagram

![Hackolade image](/db-diagram/image17.png?raw=true)

##### 2.1.2.2.3.5.2 **tokens** Hierarchy

Parent field: **users**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#aa7027b1-170e-11eb-bad3-758dcca20829>[0]</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.2.3.5.3 **tokens** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>tokens</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td>false</td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="aa7027b1-170e-11eb-bad3-758dcca20829"></a>2.1.2.2.3.6 Field **\[0\]**

##### 2.1.2.2.3.6.1 **\[0\]** Tree Diagram

![Hackolade image](/db-diagram/image18.png?raw=true)

##### 2.1.2.2.3.6.2 **\[0\]** Hierarchy

Parent field: **tokens**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#aa6e52f9-170e-11eb-bad3-758dcca20829>_id</a></td><td class="no-break-word">objectId</td><td>true</td><td>pk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#aa6e52fa-170e-11eb-bad3-758dcca20829>token</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.2.3.6.3 **\[0\]** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>document</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>DBRef</td><td></td></tr><tr><td>Min Properties</td><td></td></tr><tr><td>Max Properties</td><td></td></tr><tr><td>Additional properties</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="aa6e52f9-170e-11eb-bad3-758dcca20829"></a>2.1.2.2.3.7 Field **\_id**

##### 2.1.2.2.3.7.1 **\_id** Tree Diagram

![Hackolade image](/db-diagram/image19.png?raw=true)

##### 2.1.2.2.3.7.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="aa6e52fa-170e-11eb-bad3-758dcca20829"></a>2.1.2.2.3.8 Field **token**

##### 2.1.2.2.3.8.1 **token** Tree Diagram

![Hackolade image](/db-diagram/image20.png?raw=true)

##### 2.1.2.2.3.8.2 **token** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>token</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Format</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Sample</td><td>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjk1ZjE0NDk1YTQxNzNiYTBlNmRiODYiLCJpYXQiOjE2MDM2NjM3MDB9.oluGFBgwsQlTrNP7LDcxIw20YjiE-s3xcjvYqSZw7U8</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="aa6e52f4-170e-11eb-bad3-758dcca20829"></a>2.1.2.2.3.9 Field **createdAt**

##### 2.1.2.2.3.9.1 **createdAt** Tree Diagram

![Hackolade image](/db-diagram/image21.png?raw=true)

##### 2.1.2.2.3.9.2 **createdAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>createdAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>ISODate("2020-10-25T21:42:28.137Z")</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="aa6e52fb-170e-11eb-bad3-758dcca20829"></a>2.1.2.2.3.10 Field **updatedAt**

##### 2.1.2.2.3.10.1 **updatedAt** Tree Diagram

![Hackolade image](/db-diagram/image22.png?raw=true)

##### 2.1.2.2.3.10.2 **updatedAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>updatedAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>ISODate("2020-10-25T22:08:20.935Z")</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="aa6e52f3-170e-11eb-bad3-758dcca20829"></a>2.1.2.2.3.11 Field **\_\_v**

##### 2.1.2.2.3.11.1 **\_\_v** Tree Diagram

![Hackolade image](/db-diagram/image23.png?raw=true)

##### 2.1.2.2.3.11.2 **\_\_v** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>__v</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td>integer32</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td>false</td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td>false</td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Sample</td><td>2</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.2.4 **users** Indexes

<table class="index-table"><thead><tr><td class="table-property-column">Property</td><td class="table-column-property">_id_</td><td class="table-column-property">email_1</td></tr></thead><tbody><tr><td>Name</td><td class="table-column-indexes">_id_</td><td class="table-column-indexes">email_1</td></tr><tr><td>Key</td><td class="table-column-indexes">_id('ascending')</td><td class="table-column-indexes">email('ascending')</td></tr><tr><td>Hashed</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Unique</td><td class="table-column-indexes"></td><td class="table-column-indexes">true</td></tr><tr><td>Drop duplicates</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Sparse</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Background indexing</td><td class="table-column-indexes"></td><td class="table-column-indexes">true</td></tr><tr><td>Partial filter exp</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Expire after (seconds)</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Storage engine</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Comments</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr></tbody></table>

##### 2.1.2.2.5 **users** JSON Schema

```
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "users",
    "additionalProperties": false,
    "properties": {
        "_id": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "name": {
            "type": "string"
        },
        "email": {
            "type": "string"
        },
        "password": {
            "type": "string"
        },
        "tokens": {
            "type": "array",
            "additionalItems": true,
            "uniqueItems": false,
            "items": {
                "type": "object",
                "properties": {
                    "_id": {
                        "type": "string",
                        "pattern": "^[a-fA-F0-9]{24}$"
                    },
                    "token": {
                        "type": "string"
                    }
                },
                "additionalProperties": false,
                "required": [
                    "_id",
                    "token"
                ]
            }
        },
        "createdAt": {
            "type": "string",
            "format": "date-time"
        },
        "updatedAt": {
            "type": "string",
            "format": "date-time"
        },
        "__v": {
            "type": "integer"
        }
    },
    "required": [
        "_id",
        "name",
        "email",
        "password",
        "tokens",
        "createdAt",
        "updatedAt",
        "__v"
    ]
}
```

##### 2.1.2.2.6 **users** JSON data

```
{
    "_id": ObjectId("507f1f77bcf86cd799439011"),
    "name": "Nick DeMarco",
    "email": "nick@example.com",
    "password": "$2a$08$c3YotjXARHDv58/ThF4vWeeleDN2mjZzh59FHJ7r0Pfc3UTzOPNIq",
    "tokens": [
        {
            "_id": ObjectId("507f1f77bcf86cd799439011"),
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjk1ZjE0NDk1YTQxNzNiYTBlNmRiODYiLCJpYXQiOjE2MDM2NjM3MDB9.oluGFBgwsQlTrNP7LDcxIw20YjiE-s3xcjvYqSZw7U8"
        }
    ],
    "createdAt": ISODate("2020-10-25T21:42:28.137Z"),
    "updatedAt": ISODate("2020-10-25T22:08:20.935Z"),
    "__v": 2
}
```

##### 2.1.2.2.7 **users** Target Script

```
use task-manager-api;

db.createCollection( "users",{
    "storageEngine": {
        "wiredTiger": {}
    },
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "users",
            "additionalProperties": false,
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "name": {
                    "bsonType": "string"
                },
                "email": {
                    "bsonType": "string"
                },
                "password": {
                    "bsonType": "string"
                },
                "tokens": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "uniqueItems": false,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "_id": {
                                "bsonType": "objectId"
                            },
                            "token": {
                                "bsonType": "string"
                            }
                        },
                        "additionalProperties": false,
                        "required": [
                            "_id",
                            "token"
                        ]
                    }
                },
                "createdAt": {
                    "bsonType": "date"
                },
                "updatedAt": {
                    "bsonType": "date"
                },
                "__v": {
                    "bsonType": "int"
                }
            },
            "required": [
                "_id",
                "name",
                "email",
                "password",
                "tokens",
                "createdAt",
                "updatedAt",
                "__v"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});
db.users.createIndex(
{
    "_id": 1
},
{
    "name": "_id_"
}
);
db.users.createIndex(
{
    "email": 1
},
{
    "unique": true,
    "name": "email_1",
    "background": true
}
);

```

### <a id="edges"></a>