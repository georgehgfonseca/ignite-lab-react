import { ApolloProvider, gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { client } from "./lib/apollo";
import { Event } from "./pages/Event";
import { Router } from "./Router";

// const GET_LESSONS_QUERY = gql`
//   query {
//     lessons {
//       id
//       title
//     }
//   }
// `;

// interface Lesson {
//   id: string;
//   title: string;
// }
function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
  // const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);
  // // useEffect(() => {
  // //   client.query({ query: GET_LESSONS_QUERY }).then((response) => {
  // //     console.log(response.data);
  // //   });
  // // }, []);
  // return (
  //   <ul>
  //     {data?.lessons.map((lesson) => {
  //       return <li key={lesson.id}>{lesson.title}</li>;
  //     })}
  //   </ul>
  //   // <h1 className="text-2xl font-bold text-violet-500">Hello World!</h1>
  // );
}

export default App;
