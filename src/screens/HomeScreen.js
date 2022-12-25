import React, { useEffect } from "react";
import Banner from "../Banner";
import "./HomeScreen.css";
import Nav from "../Nav";
import requests from "../Requests";
import Row from "../Row";
import { auth } from "../firebase";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import Loading from "../Loading";
const HomeScreen = () => {
  const [updateProfile, updating] = useUpdateProfile(auth);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const updatingProfile = async () => {
      const x = await updateProfile({
        displayName: "User",
        photoURL: "https://i.ibb.co/cCTnszB/arfat-xyz-min.jpg",
      });
      console.log(x);
    };
    !user?.displayName && updatingProfile();
  }, [user, updateProfile]);
  console.log();
  if (updating) return <Loading />;
  return (
    <div className="homeScreen">
      {/* Nav  */}
      <Nav />

      {/* banner  */}
      <Banner />

      {/* rows  */}
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default HomeScreen;
