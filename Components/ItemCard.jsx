export default function ItemCard({ item, skipButton }) {
  return (
    <div className="item-card-extra-height">
      <div className="item-card" xs={6} md={6} lg={6}>
        <img src={item.img_url} alt="" />
        <header id="item-name">{item.item_name}</header>
        <p className="item-description">{item.description}</p>
        <p className="item-price">£{item.price / 100}</p>
        {skipButton ? null : <button>Order Now</button>}
      </div>
    </div>
  );
}
