from flask import Blueprint, request, g
from models.message_model import Message
from models.conversation_model import Conversation
from serializers.message_schema import MessageSchema
# from serializers.conversation_schema import ConversationSchema
from decorators.secure_route import secure_route_user
from decorators.secure_route import secure_route_business

message_schema = MessageSchema()
conversation_schema = ConversationSchema()
router = Blueprint(__name__, 'messages')

@router.route('/users/messages', methods=['POST'])
@secure_route_user
def create_user_message():
    message_dictionary = request.json
    # message = message_schema.load(message_dictionary)
    # conversation = Conversation
    