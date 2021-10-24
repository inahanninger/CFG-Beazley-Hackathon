import React from 'react';
import { StreamApp, NotificationDropdown, FlatFeed, Activity, LikeButton, CommentField, CommentList, StatusUpdateForm } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';


export default function Newsfeed() {
    return (
      <React.Fragment>
        <StreamApp apiKey='dz5f4d5kzrue' appId='102254' token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic29saXRhcnktc25vd2ZsYWtlLTEiLCJleHAiOjE2MzUwNDExNDF9.-L0AQ-EeanBMfniI16Ar7r-CrKD4Sm3MtlKs7TTwHCk'>
          <StatusUpdateForm />
          <FlatFeed
            options={{ reactions: { recent: true } }}
            notify
            Activity={(props) => (
              <Activity
                {...props}
                Footer={() => (
                  <div style={{ padding: '8px 16px' }}>
                    <LikeButton {...props} />
                    {/* <CommentField activity={props.activity} onAddReaction={props.onAddReaction} />
                    <CommentList activityId={props.activity.id} /> */}
                  </div>
                )}
              />
            )}
          />
        </StreamApp>
        </React.Fragment>
      );
};