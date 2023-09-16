import React, { useState } from 'react';
import Layout from '../Layout';
import { useQuery } from 'react-query';
import { getDummyEmployee } from '../../apis/user-module';

function ListProducts() {
  const [listEmployee, setListEmployee] = useState();

  // New way, improve by react-query
  const { data: dummyData } = useQuery(['dummyData'], async () => {
    const response = await getDummyEmployee();
    setListEmployee(response?.data);
    return response.data;
  });
  console.log('dummyDataL ', listEmployee);

  return (
    <Layout>
      <div>
        {listEmployee?.data?.map((i) => (
          <ProductCard data={i} />
        ))}
      </div>
    </Layout>
  );
}

export default ListProducts;

function ProductCard({ data }) {
  return (
    <div>
      <div>Header Card {data?.employee_name}</div>
      <div>Midle Card {data?.employee_salary}</div>
      <div>End Card</div>
    </div>
  );
}
