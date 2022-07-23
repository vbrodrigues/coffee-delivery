import {
  Bank,
  CheckCircle,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Minus,
  Money,
  Plus,
  Trash,
} from "phosphor-react";
import {
  AddressConfirmButton,
  AddressForm,
  AddressHeader,
  AddressInfoContainer,
  AddressInput,
  CartContainer,
  CheckoutConfirmButton,
  CheckoutInfoContainer,
  CheckoutItem,
  CheckoutItemInfo,
  CheckoutItemInfoQuantity,
  CheckoutItemsContainer,
  CheckoutSummary,
  CheckoutSummaryItem,
  CompleteOrderInfoContainer,
  PaymentHeader,
  PaymentInfoContainer,
  PaymentMethod,
  PaymentMethodsContainer,
  SelectedItemsContainer,
} from "./Cart.styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { formatter, PRODUCT_IMAGES } from "../Home/Product/Product";
import { FormProvider, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { OrdersContext } from "../../contexts/OrdersContext";

const checkoutFormValidationSchema = zod.object({
  cep: zod.string(),
  street: zod.string(),
  houseNumber: zod
    .number()
    .nonnegative("Informe um número de residência válido."),
  complement: zod.string().optional(),
  neighbourhood: zod.string(),
  city: zod.string(),
  state: zod.string(),
});

type CheckoutData = zod.infer<typeof checkoutFormValidationSchema>;

export function Cart() {
  const [addressIsConfirmed, setAddressIsConfirmed] = useState(false);

  const checkoutForm = useForm<CheckoutData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      cep: "",
      street: "",
      houseNumber: 0,
      complement: "",
      neighbourhood: "",
      city: "",
      state: "",
    },
  });

  const { handleSubmit, watch, register } = checkoutForm;

  const {
    cartProducts,
    itemsTotal,
    shippingCost,
    increaseProductCount,
    decreaseProductCount,
    removeProductFromCart,
    confirmAddress,
    paymentMethod,
    confirmPaymentMethod,
    emptyCart,
    address,
  } = useContext(CartContext);

  const { addOrder, orders } = useContext(OrdersContext);

  function handleSelectPaymentMethod(paymentMethod: string) {
    confirmPaymentMethod(paymentMethod);
  }

  function handleIncreaseProductCount(productId: number) {
    increaseProductCount(productId);
  }

  function handleDecreaseProductCount(productId: number) {
    decreaseProductCount(productId);
  }

  function handleRemoveProductFromCart(productId: number) {
    removeProductFromCart(productId);
  }

  const cep = watch("cep");
  const street = watch("street");
  const houseNumber = watch("houseNumber");
  const complement = watch("complement");
  const neighbourhood = watch("neighbourhood");
  const city = watch("city");
  const state = watch("state");

  function handleConfirmAddress() {
    console.log("Confirmed!");
    confirmAddress({
      cep,
      street,
      houseNumber,
      complement,
      neighbourhood,
      city,
      state,
    });
    // reset();
    setAddressIsConfirmed(true);
  }

  function handleConfirmOrder() {
    emptyCart();
    addOrder({
      createdAt: new Date(),
      id: orders.length > 0 ? orders.slice(-1)[0].id + 1 : 1,
      itemsTotal,
      shippingCost,
      total: itemsTotal + shippingCost,
      products: cartProducts,
      address,
    });
  }

  return (
    <CartContainer>
      <CompleteOrderInfoContainer>
        <h2>Complete seu pedido</h2>

        <AddressInfoContainer>
          <AddressHeader>
            <div className="AddressHeaderText">
              <MapPin size={22} color="#DBAC2C" />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>
            <CheckCircle
              size={32}
              color={addressIsConfirmed ? "#42f563" : "#d1d1d1"}
            ></CheckCircle>
          </AddressHeader>

          <AddressForm action="" onSubmit={handleSubmit(handleConfirmAddress)}>
            <FormProvider {...checkoutForm}>
              <AddressInput
                boxSize="regular"
                isOptional={false}
                placeholder="CEP"
                required
                {...register("cep", {
                  setValueAs: (v) => `${v.slice(0, 5)}-${v.slice(5, 8)}`,
                })}
              ></AddressInput>

              <AddressInput
                boxSize="full"
                isOptional={false}
                placeholder="Rua"
                required
                {...register("street")}
              ></AddressInput>

              <AddressInput
                boxSize="regular"
                isOptional={false}
                placeholder="Número"
                required
                type="number"
                {...register("houseNumber", {
                  setValueAs: (v) =>
                    v === "" || v === "0" ? undefined : parseInt(v, 10),
                })}
              ></AddressInput>

              <AddressInput
                boxSize="big"
                isOptional={true}
                placeholder="Complemento"
                {...register("complement")}
              ></AddressInput>

              <AddressInput
                boxSize="regular"
                isOptional={false}
                placeholder="Bairro"
                required
                {...register("neighbourhood")}
              ></AddressInput>

              <AddressInput
                boxSize="medium"
                isOptional={false}
                placeholder="Cidade"
                required
                {...register("city")}
              ></AddressInput>

              <AddressInput
                boxSize="small"
                isOptional={false}
                placeholder="UF"
                required
                {...register("state")}
              ></AddressInput>
            </FormProvider>
            <AddressConfirmButton>Confirmar endereço</AddressConfirmButton>
          </AddressForm>
        </AddressInfoContainer>

        <PaymentInfoContainer>
          <PaymentHeader>
            <CurrencyDollar size={22} color="#8047F8" />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </PaymentHeader>
          <PaymentMethodsContainer>
            <PaymentMethod
              selected={paymentMethod.method === "creditCard"}
              onClick={() => handleSelectPaymentMethod("creditCard")}
            >
              <CreditCard size={16} color="#8047F8" />
              <p>CARTÃO DE CRÉDITO</p>
            </PaymentMethod>
            <PaymentMethod
              selected={paymentMethod.method === "debitCard"}
              onClick={() => handleSelectPaymentMethod("debitCard")}
            >
              <Bank size={16} color="#8047F8" />
              <p>CARTÃO DE DÉBITO</p>
            </PaymentMethod>
            <PaymentMethod
              selected={paymentMethod.method === "cash"}
              onClick={() => handleSelectPaymentMethod("cash")}
            >
              <Money size={16} color="#8047F8" />
              <p>DINHEIRO</p>
            </PaymentMethod>
          </PaymentMethodsContainer>
        </PaymentInfoContainer>
      </CompleteOrderInfoContainer>

      <SelectedItemsContainer>
        <h2>Cafés selecionados</h2>
        <CheckoutInfoContainer>
          <CheckoutItemsContainer>
            {cartProducts.length === 0 && <h4>Seu carrinho está vazio.</h4>}
            {cartProducts.map((cartProduct) => {
              return (
                <CheckoutItem key={cartProduct.product.id}>
                  <div>
                    <img
                      src={PRODUCT_IMAGES[cartProduct.product.image]}
                      alt=""
                    />
                    <CheckoutItemInfo>
                      <p>{cartProduct.product.name}</p>
                      <CheckoutItemInfoQuantity>
                        <span>
                          <Minus
                            cursor={"pointer"}
                            onClick={() =>
                              handleDecreaseProductCount(cartProduct.product.id)
                            }
                          />
                          <p>{cartProduct.count}</p>
                          <Plus
                            cursor={"pointer"}
                            onClick={() =>
                              handleIncreaseProductCount(cartProduct.product.id)
                            }
                          />
                        </span>
                        <button
                          onClick={() =>
                            handleRemoveProductFromCart(cartProduct.product.id)
                          }
                        >
                          <Trash size={16} color="#8047F8" />
                          <p>REMOVER</p>
                        </button>
                      </CheckoutItemInfoQuantity>
                    </CheckoutItemInfo>
                  </div>
                  <div className="ProductTotal">
                    <h4>
                      {formatter.format(
                        cartProduct.product.price * cartProduct.count
                      )}
                    </h4>
                    <p>
                      {cartProduct.count}x{" "}
                      {formatter.format(cartProduct.product.price)}
                    </p>
                  </div>
                </CheckoutItem>
              );
            })}
          </CheckoutItemsContainer>

          <CheckoutSummary>
            <CheckoutSummaryItem>
              <p>Total de itens</p>
              <p>{formatter.format(itemsTotal)}</p>
            </CheckoutSummaryItem>
            <CheckoutSummaryItem>
              <p>Entrega</p>
              <p>{formatter.format(shippingCost)}</p>
            </CheckoutSummaryItem>
            <CheckoutSummaryItem fontWeight={700} fontSize="1.25rem">
              <p>Total</p>
              <p>{formatter.format(itemsTotal + shippingCost)}</p>
            </CheckoutSummaryItem>
          </CheckoutSummary>
          <NavLink to="/confirmation" className="nav">
            <CheckoutConfirmButton
              type="submit"
              disabled={cartProducts.length === 0}
              onClick={handleConfirmOrder}
            >
              CONFIRMAR PEDIDO
            </CheckoutConfirmButton>
          </NavLink>
        </CheckoutInfoContainer>
      </SelectedItemsContainer>
    </CartContainer>
  );
}
