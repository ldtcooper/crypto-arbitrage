import * as React from 'react';
import { LineGraph } from '.';
import { getDates, selectDates, selectHistoricalData } from '../reducers';
import { useSelector, useDispatch } from 'react-redux';

const HistoryPage = () => {
    const dispatch = useDispatch();
    const dates = useSelector(selectDates());
    const historicalData = useSelector(selectHistoricalData());

    React.useEffect(() => {
        if (dates.length === 0) {
            dispatch(getDates());
        }
    }, [dispatch, dates.length]);
    
    return (
        <main>
            <div className='main-content'style={{  }}>
                <h1>History</h1>
                <LineGraph data={historicalData} />
            </div>
        </main>
    );
}

export default HistoryPage;
