import React from 'react';
import EditBenefitForm from 'src/app/components/astrodev/EditBenefitform';

const getBenefitById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/benefits/${id}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch benefit');
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch benefit'); 
  }
};

export default async function EditTopic({ params }){
  const { id } = params;
  const {benefit} = await getBenefitById(id);

  const { title, description } = benefit;

  return (
    <div>
      <EditBenefitForm id={id} title={title} description={description} />
    </div>
  );

}

