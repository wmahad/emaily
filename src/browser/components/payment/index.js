import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux'

import * as actions from '../../actions'

class Payment extends Component {
    render() {
        // amount = 500 cents i.e. I dollar = 100 cents
        // token - got back stripe
        return (
            <StripeCheckout
                name='Emaily'
                description='$5 for 5 email credits'
                amount={5 * 100}
                token={ card => this.props.handleCard(card) }
                stripeKey={STRIPE_PUBLISHABLE_KEY}
            >
                <button className='btn'>Add Credits</button>
            </StripeCheckout>
        )
    }
}

export default connect(null, actions)(Payment);
