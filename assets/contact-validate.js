$ (function (e) {
  $ ('#contact_form').validate ({
    rules: {
      'contact[fname]': 'required',
      'contact[lname]': 'required',
      'contact[email]': {
        required: true,
        email: true,
      },
      'reemail': {
        required: true,
        email: true,
      },
      policies: 'required',
        select: "required"
    },
    messages: {
      'contact[fname]': '※名を入力してください',
      'contact[lname]': '※名を入力してください',
      'contact[email]': {
          required: "※確認のため、もう一度メールアドレスを入力してください。",
          email: "※間違ったメール形式"
      },
      'reemail': {
          required: "※確認のため、もう一度メールアドレスを入力してください。",
          email: "※間違ったメール形式"
      },
      policies: '※チェックしてください。',
        select: "※チェックしてください。"
    },
    highlight: function (element, errorClass) {
      $ (element).addClass ('has-error');
    },
    unhighlight: function (element, errorClass) {
      $ (element).removeClass ('has-error');
    },
  });
  $ ('#register_contact').click (function (e) {
    e.preventDefault ();
    $('#ContactFormName').val($('#firstName').val()+$('#lastName').val());
    console.log($ ('#ContactFormName').val());
    if ($ ('#contact_form').valid ()) {
      var firstName = $ ('#firstName').val ();
      var lastName = $ ('#lastName').val ();
      var email = $ ('#email').val ();
      var content = $ ('#content').val ();
      var select = $('#select-box').val();
      var name = firstName + ' ' + lastName;
      $ ('#name-confirm').val (name);
      $ ('#email-confirm').val (email);
      $("#select-confirm").val(select);
      $ ('#content-confirm').val (content);
      $ ('#name-confirm-sp').val (name);
      $ ('#email-confirm-sp').val (email);
      $ ('#content-confirm-sp').val (content);
      $ ('.contact').css ('display', 'none');
      $ ('.confirm').css ('display', 'block');
      // $ ('.contact_success').css ('display', 'none');
      $ ('.contact_nav').css ('display', 'none');
      $ ('.confirm_nav').css ('display', 'block');
      // $ ('.contact_success_nav').css ('display', 'none');
      $ ('html, body').animate (
        {
          scrollTop: 0,
        },
        300
      );
    } else {
      $ ('.error').each (function () {
        $ ('html, body').animate (
          {
            scrollTop: $ (this).offset ().top - 300,
          },
          1000
        );
      });
    }
  });
  $ ('#modify_contact').click (function (e) {
    $ ('.contact').css ('display', 'block');
    $ ('.confirm').css ('display', 'none');
    // $ ('.contact_success').css ('display', 'none');
  });
  $ ('#modify_contact_sp').click (function (e) {
    $ ('.contact').css ('display', 'block');
    $ ('.confirm').css ('display', 'none');
    // $ ('.contact_success').css ('display', 'none');
  });
  $ ('#register_success').click (function (e) {
    // e.preventDefault ();
    $ ('.contact').css ('display', 'none');
    // $ ('.confirm').css ('display', 'none');
    // $ ('.contact_success').css ('display', 'block');
    $ ('.contact_nav').css ('display', 'none');
    // $ ('.confirm_nav').css ('display', 'none');
    // $ ('.contact_success_nav').css ('display', 'block');
    // $ ('html, body').animate (
    //   {
    //     scrollTop: 0,
    //   },
    //   1000
    // );
  });
  $ ('#register_success_sp').click (function (e) {register_contact
    // e.preventDefault ();
    $ ('.contact').css ('display', 'none');
    // $ ('.confirm').css ('display', 'none');
    // $ ('.contact_success').css ('display', 'block');
    $ ('.contact_nav').css ('display', 'none');
    // $ ('.confirm_nav').css ('display', 'none');
    // $ ('.contact_success_nav').css ('display', 'block');
    // $ ('html, body').animate (
    //   {
    //     scrollTop: $ (this).offset ().top - 200,
    //   },
    //   1000
    // );
  });
  $ ('#formAddress').validate ({
    groups: {
      nameGroup: 'address[first-name] address[last-name]',
      phoneNumber: 'address[phone_number-block-1] address[phone_number-block-2] address[phone_number-block-3]',
      postNumber: 'address[post_office_number-block-1] address[post_office_number-block-2]',
    },
    rules: {
      'address[first-name]': 'required',
      'address[last-name]': 'required',
      'address[phone_number-block-1]': 'required',
      'address[phone_number-block-2]': 'required',
      'address[phone_number-block-3]': 'required',
      'address[post_office_number-block-1]': 'required',
      'address[post_office_number-block-2]': 'required',
      'address[city]': 'required',
      'address[street]': 'required',
    },
    messages: {
      'address[first-name]': '※姓を入力をして下さい',
      'address[last-name]': '※名前を入力をして下さい',
      'address[phone_number-block-1]': '※番号を入力をして下さい',
      'address[phone_number-block-2]': '※番号を入力をして下さい',
      'address[phone_number-block-3]': '※番号を入力をして下さい',
      'address[post_office_number-block-1]': '※番号を入力をして下さい',
      'address[post_office_number-block-2]': '※番号を入力をして下さい',
      'address[city]': '※市を入力をして下さい',
      'address[street]': '※住を入力をして下さい',
    },
    highlight: function (element, errorClass) {
      $ (element).addClass ('has-error');
    },
    unhighlight: function (element, errorClass) {
      $ (element).removeClass ('has-error');
    },
  });
  $ ('#create_customer').validate ({
    rules: {
      'customer[first_name]': 'required',
      'customer[last_name]': 'required',
      'customer[email]': {
        required: true,
        email: true,
      },
        email2:{
            required:true,
            email:true,
        },
      'customer[password]': {
        minlength: 6,
        required: true,
      },
      passwordConfirm: {
        required: true,
        equalTo: '#CreatePassword',
      },
    },
    messages: {
      'customer[first_name]': '※名を入力してください',
      'customer[last_name]': '※名を入力してください',
      'customer[email]': {
          required: "※確認のため、もう一度メールアドレスを入力してください。",
          email: "※間違ったメール形式"
      },
        email2:{
            required: "※確認のため、もう一度メールアドレスを入力してください。",
            email: "※間違ったメール形式"
        },
      'customer[password]': {
          required:"※パスワードが入力されていません",
          minlength: "※パスワードは最低でも6文字必要です"
      },
      passwordConfirm: {
          required:"※パスワードが入力されていません",
          equalTo: "※パスワードの確認が一致しません"
      },
    },
    highlight: function (element, errorClass) {
      $ (element).addClass ('has-error');
    },
    unhighlight: function (element, errorClass) {
      $ (element).removeClass ('has-error');
    },
  });
  $ ('#customer_login').validate ({
    rules: {
      'customer[email]': {
        required: true,
        email: true,
      },
      'customer[password]': {
        required: true,
        minlength: 6,
      },
    },
    messages: {
      'customer[email]': {
          required: "※あなたのメールアドレスを入力してください",
          email: "※間違ったメール形式"
      },
      'customer[password]': {
          required:"※パスワードが入力されていません",
          minlength: "※パスワードは最低でも6文字必要です"
      },
    },
    highlight: function (element, errorClass) {
      $ (element).addClass ('has-error');
    },
    unhighlight: function (element, errorClass) {
      $ (element).removeClass ('has-error');
    },
  });
    $ ('#form_retrievel').validate ({
        rules: {
            email: {
                required: true,
                email: true,
            }
        },
        messages: {
            email: {
                required: "※あなたのメールアドレスを入力してください",
                email: "※間違ったメール形式"
            }
        },
        highlight: function (element, errorClass) {
            $ (element).addClass ('has-error');
        },
        unhighlight: function (element, errorClass) {
            $ (element).removeClass ('has-error');
        },
    });
});
