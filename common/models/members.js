var loopback = require('loopback');

module.exports = function(Members) {

Members.addMembers=function (id,name,city,cb) {
Members.create({MemberId:objMember.id,Name:objMember.name,city:objMember.city},function (err,member) {
if (!err)
 {
 	cb(err,member);
 }
})
}

Members.getMember=function (id,cb) {
	var ctx = loopback.getCurrentContext();
    var currentUser = ctx && ctx.get('currentUser');
    console.log(currentUser);
	Members.find({"where":{MemberId:id}},function (mem_err,mem_res) {
		if (!mem_err)
		 {
		 	cb(mem_err,mem_res);
		 }
		
	})
}

Members.remoteMethod('addMembers',{
	 description: "Add Member.",
        accepts: [{
            arg: 'id',
            type: 'number',
            required: true
        }, {
            arg: 'name',
            type: 'string',
            required: true
        },
        {
            arg: 'city',
            type: 'string',
            required: true
        }],
        returns: {
            arg: "member",
            type: "object"
        },
        http: {
            verb: "post",
            path: "/addMembers"
        }
});

Members.remoteMethod('getMember', {
        description: 'Get Member',
        accepts: [{
            arg: 'id',
            type: 'Number',
            required: true
        }],
        returns: {
            arg: "data",
            type: "object"
        },
        http: {
            verb: "get",
            path: "/getMember"
        }
    });

};
