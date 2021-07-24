import React from 'react';

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={`widgetlg__btn ${type}`}>{type}</button>;
  };

  return (
    <div className='widgetlg'>
      <h3 className='widgetlg__title'>Latest Transactions</h3>
      <table className='widgetlg__table'>
        <tbody>
          <tr className='widgetlg__tr'>
            <th className='widgetlg__th'>Customer</th>
            <th className='widgetlg__th'>Date</th>
            <th className='widgetlg__th'>Amount</th>
            <th className='widgetlg__th'>Status</th>
          </tr>

          <tr className='widgetlg__tr'>
            <td className='widgetlg__user'>
              <img
                className='widgetlg__image'
                src='https://images.unsplash.com/photo-1549820610-ec7475b33969?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                alt=''
              />
              <span className='widgetlg__name'>John Doe</span>
            </td>
            <td className='widgetlg__date'>2 Jun 2021</td>
            <td className='widgetlg__amount'>$999.00</td>
            <td className='widgetlg__status'>
              <Button type='Approved' />
            </td>
          </tr>

          <tr className='widgetlg__tr'>
            <td className='widgetlg__user'>
              <img
                className='widgetlg__image'
                src='https://images.unsplash.com/photo-1549820610-ec7475b33969?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                alt=''
              />
              <span className='widgetlg__name'>John Doe</span>
            </td>
            <td className='widgetlg__date'>2 Jun 2021</td>
            <td className='widgetlg__amount'>$999.00</td>
            <td className='widgetlg__status'>
              <Button type='Declined' />
            </td>
          </tr>

          <tr className='widgetlg__tr'>
            <td className='widgetlg__user'>
              <img
                className='widgetlg__image'
                src='https://images.unsplash.com/photo-1549820610-ec7475b33969?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                alt=''
              />
              <span className='widgetlg__name'>John Doe</span>
            </td>
            <td className='widgetlg__date'>2 Jun 2021</td>
            <td className='widgetlg__amount'>$999.00</td>
            <td className='widgetlg__status'>
              <Button type='Pending' />
            </td>
          </tr>

          <tr className='widgetlg__tr'>
            <td className='widgetlg__user'>
              <img
                className='widgetlg__image'
                src='https://images.unsplash.com/photo-1549820610-ec7475b33969?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                alt=''
              />
              <span className='widgetlg__name'>John Doe</span>
            </td>
            <td className='widgetlg__date'>2 Jun 2021</td>
            <td className='widgetlg__amount'>$999.00</td>
            <td className='widgetlg__status'>
              <Button type='Approved' />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
