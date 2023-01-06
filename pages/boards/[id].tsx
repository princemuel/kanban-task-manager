import { MainContent } from "components";
import Head from "next/head";
import type { NextPageWithLayout } from "types";

// type Props = InferNextPropsType<typeof getServerSideProps>;
type Props = {};

// const Board: NextPageWithLayout<Props> = ({ dehydratedState }) => {
const Board: NextPageWithLayout<Props> = () => {
  // const { data } = useGetBoardQuery({ id: '160db8' });

  return (
    <>
      <Head>
        <title>Kanban Task Manager</title>
      </Head>
      <MainContent className='text-900 bg-brand-300 py-10 px-8 font-bold text-neutral-100'>
        <h1>MAIN CONTENT</h1>
        {/* <p className='text-600'>{JSON.stringify(dehydratedState?.queries)}</p> */}
        <br />
        <br />
        <br />
        {/* <p className='text-600'>{JSON.stringify(data)}</p> */}
      </MainContent>
    </>
  );
};

export default Board;

// export async function getServerSideProps() {
//   // const queryClient = new QueryClient(queryOptions);

//   await queryClient.prefetchQuery(
//     useGetBoardQuery.getKey({ id: '160db8' }),
//     useGetBoardQuery.fetcher({ id: '160db8' })
//   );
//   // await queryClient.prefetchQuery(['boards'], () => getBoards());

//   return {
//     props: {
//       dehydratedState: createDehydratedState(queryClient),
//       // dehydratedState: dehydrate(queryClient),
//     },
//   };
// }
