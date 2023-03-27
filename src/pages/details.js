export default function Details(props) {
    const [filme, setFilme] = useState(null);
  
    useEffect(() => {
      const { id } = props.match.params;
      const item = Filmes.find((item) => item.id === id);
      setFilme(item);
    }, [props.match.params]);
  
    if (filme) {
      return (
        <div>
          <h1>{filme.titulo}</h1>
          <p>{filme.sinopse}</p>
        </div>
      );
    } else {
      return <h1>Filme não encontrado</h1>;
    }
  }
  