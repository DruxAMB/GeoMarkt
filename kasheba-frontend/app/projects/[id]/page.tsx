// import { BountyDetails } from '@/components/bounty-component/BountyDetails'
import { ProjectDetails } from '@/app/components/project-details/ProjectDetails';
import dummyData, { DataProp } from '@/dummy-data';
import { notFound } from 'next/navigation';
import React from 'react'

// import dummyData, { DataProp } from '../../../../dummy-data';

export async function generateStaticParams() {
  return dummyData.map((data) => ({
    id: data.nameTag,
  }));
}

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const getData = dummyData.find((data: DataProp) => data.nameTag === id);


  if (!getData) {
    return notFound(); // Show a 404 page if the id doesn't match any bounty
  }

  return (
    <div className='grid gap-2 p-5 pt-28 px-4 md:px-10 lg:px-32'>
      <ProjectDetails getData={getData} />
    </div>
  )
}

export default page