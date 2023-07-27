import React from "react";
import { dummyContacts } from "./dummyContacts";

const ContactList = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="3">Contact List</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
                {dummyContacts.map((contact) => (
                    <tr key={contact.id}>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>{contact.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ContactList;