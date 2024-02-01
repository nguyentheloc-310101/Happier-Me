import React from 'react';
interface IItemInfoProps {
  color: string;
  content: string;
}
const ItemInfo = ({ color, content }: IItemInfoProps) => {
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="item-info-offer">
      <div className="text-content-item-info-offer">{content}</div>
    </div>
  );
};

export default ItemInfo;
