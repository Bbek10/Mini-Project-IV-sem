import { useState } from "react";
import styles from "../styles/OrderDetail.module.css";

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [values, setValues] = useState({
    name: "",
    newEmail: "",
  });

  const { name, newEmail } = values;
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    createOrder({ customer, address, phone, email, total, method: 0 });
    // alert(
    //   "A detailed information about the order has been sent to the given Email Address, thank you for ordering food from us :)"
    // );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(values),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit}>
          <h1 className={styles.title}>You will pay after delivery.</h1>
          <div className={styles.item}>
            <label className={styles.label}>User Name</label>
            <input
              placeholder="Your full name"
              type="text"
              name="name"
              value={name}
              className={styles.input}
              onChange={handleChange}
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Full name</label>
            <input
              placeholder="Your full name"
              type="text"
              value={customer}
              className={styles.input}
              onChange={(e) => setCustomer(e.target.value)}
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Phone Number</label>
            <input
              placeholder="9841234567"
              className={styles.input}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              maxLength="6"
              required
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Email</label>

            <input
              placeholder="example@email.com"
              type="email"
              value={email}
              className={styles.input}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>New Email</label>

            <input
              placeholder="example@email.com"
              type="email"
              name="newEmail"
              value={newEmail}
              className={styles.input}
              onChange={handleChange}
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Address</label>
            <textarea
              rows={5}
              placeholder="Your Address"
              type="text"
              className={styles.textarea}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button className={styles.button} onClick={handleClick}>
            Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderDetail;
