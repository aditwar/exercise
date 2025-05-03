import { IEvent } from '@/app/type';

// ini biar saat FETCH DATA yang tampil DETAIL USER yg diambil dari JSON SERVER (INTERAKTIF)
async function getData(id: string) {
  //! PERHATIKAN INI URL BACKEND (.env.local) alamat dari JSON SERVER menggunakan BACKTIK
  const res = await fetch(`http://localhost:1000/events/${id}`, {
    // ini biar data yg ditampilkan OTO terbaruhi CACHING, jika diubah oleh user (User on Demand)
    next: { tags: ['users'] },
  });

  // ini untuk menangkap ERROR
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

//! ini untuk DYNAMIC META DATA
export async function generateMetadata(props: { params: { id: string } }) {
  const { id } = await props.params;
  const data: IEvent = await getData(id);

  return {
    title: `Event Commerce | Event ${data.name}`,
    description: 'Detail Event ${data.name}',
  };
}

export default async function EventDetailPage(props: {
  params: { id: string };
}) {
  // id ini sesuaikan nama folder nya [id]
  // { params } merupakan parameter ini untuk menangkap [id] yg DYNAMIC
  // { params }: { params } itu merupakan tipe data dari { params } berupa OBJ
  // { params }: { params:{id: string} } itu merupakan tipe dari params berupa nama yg merupakan string
  const { id } = await props.params;
  const data: IEvent = await getData(id);

  return (
    <div>
      {/* params.id ini menyesuaikan folder nya [id] */}
      {/* ini menampilkan semua yg didalam {data} */}
      <h1>Detail Event with ID : {id}</h1>
      <p>Name: {data.name}</p>
      <p>price: {data.price}</p>
    </div>
  );
}
