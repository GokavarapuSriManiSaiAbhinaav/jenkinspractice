import React, { useEffect, useState } from 'react';
import config from './config';

export default function ViewArt() {
    const [arts, setArts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchArts = async () => {
        try {
            const res = await fetch(`${config.url}/art/view`);
            const data = await res.json();
            setArts(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        try {
            const res = await fetch(`${config.url}/art/delete/${id}`, { method: 'DELETE' });
            if (res.ok) setArts(arts.filter(art => art.id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchArts();
    }, []);

    if (loading) return <p style={{ textAlign: 'center' }}>Loading...</p>;

    const tableStyle = { width: '100%', borderCollapse: 'collapse' };
    const thStyle = { border: '1px solid #ccc', padding: '8px', backgroundColor: '#f0f0f0' };
    const tdStyle = { border: '1px solid #ccc', padding: '8px', textAlign: 'center' };
    const buttonStyle = { padding: '5px 10px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' };

    return (
        <div>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>View Arts</h2>
            {arts.length === 0 ? (
                <p style={{ textAlign: 'center' }}>No arts found.</p>
            ) : (
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={thStyle}>ID</th>
                            <th style={thStyle}>Art Name</th>
                            <th style={thStyle}>Price</th>
                            <th style={thStyle}>Category</th>
                            <th style={thStyle}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arts.map(art => (
                            <tr key={art.id}>
                                <td style={tdStyle}>{art.id}</td>
                                <td style={tdStyle}>{art.artname}</td>
                                <td style={tdStyle}>{art.price}</td>
                                <td style={tdStyle}>{art.category}</td>
                                <td style={tdStyle}>
                                    <button style={buttonStyle} onClick={() => handleDelete(art.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}