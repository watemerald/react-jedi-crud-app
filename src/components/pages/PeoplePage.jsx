import React, {useState} from 'react';
import Table from "../common/Table";
import Form from "../common/Form";

const data = [
    {first: 'Mark', last: 'Otto', handle: '@motto', id: '1'},
    {first: 'Carl', last: 'Reno', handle: '@ceno', id: '2'},
    {first: 'Steve', last: 'Smith', handle: '@ssteve', id: '3'}
]

const columns = Object.keys(data[0]);

const PeoplePage = () => {
    const pageName = 'People';
    const [people, setPeople] = useState(data);

    const handleAppPerson = (personData) => {
        const data = [...people, personData];
        setPeople(data)
    }

    const getInitialPeopleData = () => {
        return columns.reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
        }, {})
    }

    const handleDelete = (id) => {
        const filteredPeople = people.filter(person => person.id !== id);
        setPeople(filteredPeople)
    }

    return (
        <>
            <h2>{pageName} from Star Wars Universe</h2>
            <Table
                data={people}
                columns={columns}
                tableDescriptor={pageName}
                onDelete={handleDelete}
            />
            <Form
                initialData={getInitialPeopleData()}
                columns={columns}
                onAddData={handleAppPerson}
            />
        </>
    );
};

export default PeoplePage;
