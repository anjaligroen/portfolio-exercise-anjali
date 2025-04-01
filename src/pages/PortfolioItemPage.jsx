export const PortfolioItemPage = ({ item }) => {
  return (
    <div className="portfolio-item-page">
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <img src={item.imageUrl} alt={item.title} />
    </div>
  );
};
