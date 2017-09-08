import React from 'react';

export function CommonQuestionPage() {
  return (
    <div>
      <div className="display-4 text-center my-5">Common Questions</div>
      <div id="accordion" role="tablist">
        <div className="card">
          <div className="card-header" role="tab" id="headingOne">
            <h5 className="mb-0">
              <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                What makes Spend! different?
              </a>
            </h5>
          </div>
          <div id="collapseOne" className="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
            <div className="card-body">
                <p>At Spend!, we do things properly. We pride ourselves on tackling the fundamental time-consuming issues of expenses. This includes a proper accounting integration with the likes of Xero, where we aim to handle as much as possible of the annoying process for you. Unlike others, we're not offering a half-baked integration, where you still have to perform X, Y and Z in order to actually complete the expenses process. This is a key benefit of using Spend!.</p>

                <p>We built Spend! from the ground up to create a cutting-edge service to solve the expenses problem once and for all. We take feedback very seriously, so if you need something then let us know.</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" role="tab" id="headingTwo">
            <h5 className="mb-0">
              <a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                How does it work?
              </a>
            </h5>
          </div>
          <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
            <div className="card-body">
                <p>We're building the most efficient and simple to use expense solution on the planet. Load money to your Spend! account and distribute a funding allowance to the various cards connected to your account. When a user pays for something, they get an instant notification on their phone, and at the same time the transaction data is processed and sent to the accounting system.</p>

                <p>Users can then amend the expense on their phone and add a photo of the receipt if required. And that's it. Everything is processed and synced exactly as you have configured it to be within your accounting system. If necessary, you can also easily export your transaction data.</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" role="tab" id="headingThree">
            <h5 className="mb-0">
              <a className="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                What are the advantages over a recipt scanner?
              </a>
            </h5>
          </div>
          <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
            <div className="card-body">
                <p>Spend! is a company that provides a real-time product. As soon as you pay with Spend!, the transaction is in your accounting system and you receive an instant notification. We capture transaction details accurately and don't rely on scanning receipts (which can often be faded or lost). Since we power the payment, we have a lot of the required data so there is no reliance on OCR (optical character recognition) or humans in offshore data entry centres (something many don't realise actually happens).</p>

                <p>We bridge the gap between a corporate card and expense management solution (such as a receipt scanner service), removing the annoying reimbursement steps and costly requirements to pay for and use two separate solutions. Our product not only saves you money, but enables you to see, monitor and even restrict company spending instantly, so that there are no end-of-month surprises for you or your employees.</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" role="tab" id="headingFour">
            <h5 className="mb-0">
              <a className="collapsed" data-toggle="collapse" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Are there any hidden fees?
              </a>
            </h5>
          </div>
          <div id="collapseFour" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
            <div className="card-body">
                <p>We’ve tried to make our fee structure clear and simple but also flexible to suit your needs. You only pay for active card users and we have created two core pricing structures. Firstly, you can opt for a monthly fee and only pay for what you use. Find info on the Basic and Business plan fees here.</p>

                <p>Or if you want the security of knowing what you will be spending each month, you can opt for the for the all-inclusive Pro plan which includes transaction fees, everything in the Basic and Business plans as well as 0% foreign exchange mark-up on overseas spending. This tariff may be more cost-effective for you dependent on your spending behaviour. Our Pro packages is subject to a fair use policy which can be found here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
