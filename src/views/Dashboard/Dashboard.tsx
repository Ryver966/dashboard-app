import { useState } from "react";
import { ListItem } from "../../components/ListItem/ListItem";
import { useFetch } from "../../hooks/useFetch";
import { TListItem } from "../../utils/Eshared";

export const Dashboard = () => {
  const [subscribed, setSubscribed] = useState<Array<number>>([]);
  const { data, error } = useFetch({
    url: "https://api.recruitment.4soft.tech/list",
  });

  if (!data && !error) {
    return <div className="h-full w-full grid">Loading</div>;
  }

  if (error) {
    <div className="h-full w-full">
      <p className="color-red">Something went wrong... Refres the app</p>
    </div>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>

      {data ? (
        <>
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-6">Subscribed</h2>
            <div className="grid grid grid-flow-row-dense grid-cols-3 gap-4">
              {(data as Array<TListItem>)
                .filter((x) => subscribed.indexOf(x.id) >= 0)
                .map((i) => {
                  const isSubscribed = subscribed.indexOf(i.id) >= 0;

                  return (
                    <ListItem
                      className="border-2 border-green"
                      key={i.id}
                      buttonText={isSubscribed ? "Unsubscribe" : "Subscribe"}
                      item={i}
                      onButtonClick={() => {
                        if (isSubscribed) {
                          setSubscribed(subscribed.filter((s) => s !== i.id));
                        } else setSubscribed([...subscribed, i.id]);
                      }}
                    />
                  );
                })}
            </div>
          </div>

          <div className="grid grid grid-flow-row-dense grid-cols-3 gap-4 border-t-2 pt-6">
            {(data as Array<TListItem>)
              .filter((x) => subscribed.indexOf(x.id) < 0)
              .map((i) => {
                const subscribedIdx = subscribed.indexOf(i.id);

                return (
                  <ListItem
                    key={i.id}
                    buttonText={
                      subscribedIdx >= 0 ? "Unsubscribe" : "Subscribe"
                    }
                    item={i}
                    onButtonClick={() => {
                      if (subscribedIdx >= 0) {
                        setSubscribed(subscribed.filter((s) => s !== i.id));
                      } else setSubscribed([...subscribed, i.id]);
                    }}
                  />
                );
              })}
          </div>
        </>
      ) : (
        <p>No Data...</p>
      )}
    </div>
  );
};
