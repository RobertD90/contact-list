const ContactRow = ({ contact }) => {
    console.log(contact)
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
        </tr>
    );
}

export default ContactRow