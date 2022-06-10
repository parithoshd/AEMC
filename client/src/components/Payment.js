import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import GooglePayButton from '@google-pay/button-react'
import { PayContext } from './UserContextProvider'




const Payment = () => {
    const { paymentStatus, setPaymentStatus } = useContext(PayContext)
    return (
        <>
            <div>
                <GooglePayButton
                    environment="TEST"
                    paymentRequest={{
                        apiVersion: 2,
                        apiVersionMinor: 0,
                        allowedPaymentMethods: [
                            {
                                type: 'CARD',
                                parameters: {
                                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                    allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                },
                                tokenizationSpecification: {
                                    type: 'PAYMENT_GATEWAY',
                                    parameters: {
                                        gateway: 'example',
                                        gatewayMerchantId: 'exampleGatewayMerchantId',
                                    },
                                },
                            },
                        ],
                        merchantInfo: {
                            merchantId: '12345678901234567890',
                            merchantName: 'Demo Merchant',
                        },
                        transactionInfo: {
                            totalPriceStatus: 'FINAL',
                            totalPriceLabel: 'Total',
                            totalPrice: "100.00",
                            currencyCode: 'INR',
                            countryCode: 'IN',
                        },
                        shippingAddressRequired: true,
                        callbackIntents: ['PAYMENT_AUTHORIZATION'],
                    }}

                    onLoadPaymentData={paymentRequest => {
                        console.log('load payment data', paymentRequest);
                    }}
                    onPaymentAuthorized={paymentData => {
                        console.log('Payment Authorized Success', paymentData)
                        console.log(paymentData)
                        return { transactionState: 'SUCCESS' }
                    }}
                    existingPaymentMethodRequired='false'
                    buttonColor='black'
                    buttonType='buy'
                />
            </div>
        </>
    )
}

export default Payment