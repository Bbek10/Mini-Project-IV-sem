import React from "react";
import styles from "../../styles/Order.module.css";

const Order = () => {
  const status = 0;

  //for different styles for different operations
  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.trTitle}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>

            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>9999911</span>
              </td>
              <td>
                <span className={styles.name}>Bibek Manandhar</span>
              </td>
              <td>
                <span className={styles.address}>Kuleshwor 14 kath</span>
              </td>
              <td>
                <span className={styles.quantity}>2</span>
              </td>
              <td>
                <span className={styles.total}>$39.80</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <img src="/img/paid.png" width={30} height={30} alt="" />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <img
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={30}
                height={30}
                alt=""
              />
            </div>
          </div>

          <div className={statusClass(1)}>
            <img src="/img/bake.png" width={30} height={30} alt="" />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <img
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={30}
                height={30}
                alt=""
              />
            </div>
          </div>

          <div className={statusClass(2)}>
            <img src="/img/bike.png" width={30} height={30} alt="" />
            <span>On the Way </span>
            <div className={styles.checkedIcon}>
              <img
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={30}
                height={30}
                alt=""
              />
            </div>
          </div>

          <div className={statusClass(3)}>
            <img src="/img/delivered.png" width={30} height={30} alt="" />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <img
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={30}
                height={30}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={styles.row}></div>
      </div>

      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
