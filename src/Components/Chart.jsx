import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LabelList } from 'recharts';
import useApps from '../Hooks/useApps';
import Loading from '../Layouts/Loading';

const Chart = () => {
  const { apps, loading, error } = useApps();

  if (loading) return <Loading/>;
  if (error) return <p>Error loading data...</p>;

  const ratingsData = Array.isArray(apps)
    ? apps[0]?.ratings || []
    : apps?.ratings || [];

  // Sort ratings from 5 star → 1 star
  const sortedData = [...ratingsData].sort((a, b) => {
    const aNum = parseInt(a.name);
    const bNum = parseInt(b.name);
    return bNum - aNum; 
  });

  // Prepare data for chart
  const data = sortedData.map(r => ({
    rating: r.name,
    count: r.count,
  }));

  if (!data.length) return <p>No rating data found.</p>;

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        layout="vertical"
        data={data}
        margin={{ top: 20, right: 90, left: 10, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          type="number"
          domain={[0, 'dataMax']}
          tick={{ fill: '#555' }}
        />
        <YAxis
          type="category"
          dataKey="rating"
          width={80}
          tick={{ fill: '#555' }}
        />
        <Tooltip />
        <Bar dataKey="count" fill="orange" barSize={20}>
          <LabelList dataKey="count" position="right" style={{ fill: '#333' }} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
