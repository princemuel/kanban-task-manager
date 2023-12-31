function PageRoute() {
  const dummyArray = new Array(50).fill(0);
  return (
    <main className="">
      {dummyArray.map((item, index) => (
        <p key={`${item}${index}`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          optio eligendi deleniti, minima est nulla dolores autem modi culpa quo
          sapiente repellendus perspiciatis qui eum quis fuga nesciunt enim iure
          omnis harum laudantium? Dicta, debitis nemo a beatae similique
          dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Inventore ducimus quisquam eius dolores nostrum praesentium molestiae
          sed, quam magnam consectetur veniam cumque, eligendi fugit reiciendis
          minima, dolorum laborum repellendus doloribus. Animi quibusdam, rerum
          vel qui impedit incidunt fugit reiciendis ipsam. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore ducimus quisquam eius
          dolores nostrum praesentium molestiae sed, quam magnam consectetur
          veniam cumque, eligendi fugit reiciendis minima, dolorum laborum
          repellendus doloribus. Animi quibusdam, rerum vel qui impedit incidunt
          fugit reiciendis ipsam.
        </p>
      ))}
    </main>
  );
}

export default PageRoute;
