"use strict";

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada ut lectus ut auctor. In venenatis lacinia purus, rutrum viverra enim hendrerit in. Suspendisse potenti. Quisque lorem elit, efficitur ac mauris vitae, tristique laoreet nulla. Vivamus egestas sem at massa elementum condimentum. Donec lacinia laoreet lorem, vitae hendrerit urna laoreet vehicula. Pellentesque enim metus, feugiat vel mauris a, eleifend mollis elit. Phasellus et nulla quis ex blandit commodo et in erat. Cras laoreet massa eros, efficitur volutpat diam ullamcorper varius. Morbi vel odio eget turpis ornare blandit. Etiam iaculis tellus ut ipsum imperdiet commodo.
Maecenas ut orci quis enim elementum convallis a vel velit. Nam ante dolor, sollicitudin vitae enim sit amet, vehicula pellentesque odio. Mauris purus orci, mollis vitae tempor vitae, venenatis vitae ex. Sed in dui commodo, consequat odio et, ornare felis. Mauris rutrum elementum risus quis tincidunt. In tempus urna in arcu sollicitudin, vitae sagittis lorem vehicula. Proin ullamcorper ipsum pellentesque lorem vehicula commodo.
Sed ullamcorper diam ac magna pharetra, ut pretium libero tristique. Ut feugiat eleifend mi, sed feugiat elit aliquam a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus vel purus sem. Nullam porta faucibus urna, a condimentum nunc mattis sit amet. In a ligula lobortis, congue nisl ut, varius ipsum. Curabitur vel ipsum eget odio vestibulum viverra. Donec ullamcorper malesuada felis, dapibus luctus mi. Fusce eget nibh tincidunt turpis sagittis viverra sed vitae nunc. Donec mollis odio et ligula egestas cursus. Mauris eu massa augue. Mauris nec eros in ante pellentesque iaculis sit amet eget ipsum. Etiam sagittis maximus nunc quis efficitur. Mauris vel sem ipsum.
Praesent ut volutpat magna. In at auctor orci. Ut at tempor nunc, ac lobortis nisi. Proin vitae elit dapibus, molestie ligula sed, tincidunt quam. Donec ut rhoncus turpis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sagittis in ex id porta. Suspendisse potenti. Donec scelerisque, sapien ut vehicula auctor, enim risus accumsan massa, sed sagittis ipsum urna in ipsum. Fusce vitae enim sit amet nulla pretium vehicula. Cras lacus orci, tempor eu mollis non, malesuada et sem. Phasellus porttitor massa euismod ante interdum, sed viverra mauris convallis. Cras sodales erat vel vehicula euismod. In eget odio ut metus porttitor vulputate porttitor vitae diam. Pellentesque at nisi fringilla, dapibus diam sit amet, iaculis nulla.
Aenean viverra luctus pharetra. Duis bibendum dui et erat euismod malesuada. Proin luctus augue ut est volutpat tempus. Sed maximus est id turpis fringilla vulputate. Integer eget lorem molestie, auctor nibh in, volutpat nibh. Duis mi mauris, hendrerit in aliquet ut, posuere non dui. Curabitur quis auctor ante. Morbi nec rhoncus nunc. Nam posuere augue eget ante luctus, a tincidunt nunc sodales. Donec est purus, congue ac eros ut, tristique ornare lacus. Proin in mattis nisl. Curabitur lobortis est sit amet dui suscipit molestie eget eget odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam eget nibh nisl. Aliquam elementum nisi non ex pretium faucibus. Quisque finibus sollicitudin dui, a egestas ante rutrum a.`;


const Hapi = require('hapi');

const server = new Hapi.Server({
  useDomains : true
});
server.connection({ port: 3000, host: 'localhost' });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply(text);
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
