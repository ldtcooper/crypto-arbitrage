import * as React from 'react';
import { DataTable } from './';

const ArbitragePage = () => {
    return (
        <main style={{ display: 'flex', flexDirection: 'column' }}>
            <h1>Arbitrage</h1>
            <DataTable />        
        </main>
    );
}

export default ArbitragePage;
