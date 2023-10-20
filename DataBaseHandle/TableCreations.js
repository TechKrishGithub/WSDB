import React from "react";
import { createTable } from ".";

const TableCreations = () => {
    const USER_MASTER_COLUMNS = [{ name: 'id', type: 'INTEGER', constrain: 'PRIMARY KEY AUTOINCREMENT' }, { name: 'username', type: 'VARCHAR' }, { name: 'password', type: 'VARCHAR' }, { name: 'userid', type: 'INTEGER' }, { name: 'token', type: 'VARCHAR' }];
    const LocationDetails = [{ name: 'id', type: 'INTEGER', constrain: 'PRIMARY KEY AUTOINCREMENT' }, { name: 'District', type: 'VARCHAR' }, { name: 'County', type: 'VARCHAR' }, { name: 'SubCounty', type: 'INTEGER' }, { name: 'Parish', type: 'VARCHAR' }]

    createTable("User_Master", USER_MASTER_COLUMNS)
    createTable("LocationDetails", LocationDetails)

}

export default TableCreations;